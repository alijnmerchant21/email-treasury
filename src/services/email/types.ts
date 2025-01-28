export interface EmailRequest {
    id: string;
    from: string;
    subject: string;
    body: string;
    amount?: number;
    timestamp: Date;
}

// Define core email request interfaces and types

