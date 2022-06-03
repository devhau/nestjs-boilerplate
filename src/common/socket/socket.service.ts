import { Injectable } from "@nestjs/common";
import { SocketGateway } from "./socket.gateway";

@Injectable()
export class SocketService {
    constructor(private readonly socketGateway: SocketGateway) {

    }
    sendGuestAll(event: string, payload: any) {
        this.socketGateway.sendGuestAll(event, payload);
    }
    sendNotGuestAll(event: string, payload: any) {
        this.socketGateway.sendNotGuestAll(event, payload);
    }
    sendUser(userId: string, event: string, payload: any) {
        this.socketGateway.sendUser(userId, event, payload);
    }
}