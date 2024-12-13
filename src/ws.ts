import socketIOClient from "socket.io-client";

export const WS =
  "http://ec2-15-206-27-129.ap-south-1.compute.amazonaws.com:8080";
export const ws = socketIOClient(WS);
