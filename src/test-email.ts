import { EmailService } from './services/email/service';

async function test() {
  const emailService = await EmailService.initialize();
  
  emailService.watchInbox(async (request) => {
    console.log('New payment request:', {
      from: request.from,
      amount: request.amount,
      timestamp: request.timestamp
    });
  });
}

test().catch(console.error);

// Add email service integration test script