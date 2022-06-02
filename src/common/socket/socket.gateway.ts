
import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { DebuggerService } from '../debugger/service/debugger.service';
import { HelperEncryptionService } from '../utils/helper/service/helper.encryption.service';

@WebSocketGateway()
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        private readonly helperEncryptionService: HelperEncryptionService,
        private readonly debuggerService: DebuggerService
    ) { }
    @WebSocketServer()
    server: Server;

    getUser(client: Socket) {
        try {
            const bearerToken = client.handshake.headers.authorization.split(' ')[1].trim();
            return this.helperEncryptionService.jwtDecrypt(bearerToken) as any;
        } catch (ex) {
            return {};
        }
    }
    afterInit(server: Server) { }
    handleDisconnect(client: Socket) {
        let user = this.getUser(client);
        client.leave(`user_${user.address ?? "guest"}`);
        if (user?.address) {
            client.leave('user_not_guest');
        }
    }
    handleConnection(client: Socket, ...args: any[]) {
        let user = this.getUser(client);
        client.join(`user_${user.address ?? "guest"}`);
        if (user?.address) {
            client.join('user_not_guest');
        }
    }
    sendGuestAll(event: string, payload: any) {
        this.server.to('user_guest').emit(event, payload);
    }
    sendNotGuestAll(event: string, payload: any) {
        this.server.to('user_not_guest').emit(event, payload);
    }
    sendUser(userId: string, event: string, payload: any) {
        this.server.to(`user_${userId}`).emit(event, payload);
    }
}