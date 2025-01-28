import { authenticate } from '@google-cloud/local-auth';
import { EMAIL_CONFIG } from '../../config/email';

export async function getGmailAuth() {
  return authenticate({
    keyfilePath: EMAIL_CONFIG.CREDENTIALS_PATH,
    scopes: EMAIL_CONFIG.SCOPES
  });
}

// Add Gmail OAuth authentication service 

