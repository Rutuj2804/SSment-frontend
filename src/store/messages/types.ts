export enum errorType {
    "ERROR"= "ERROR",
    "SUCCESS"= "SUCCESS",
};

export interface Message {
    _id: string;
    text: string;
    type: string;
}

export interface MessageState {
    messages: Message[]
}
