# Email Treasury!

## Abstract

The Email Treasury Agent automates small fund disbursements within organizations through email requests while ensuring security through both organizational and financial controls. It leverages Warden's keychain functionality for autonomous transaction signing, enabling a fully automated process for requests under $100.

## Key Features

1. Email-based request processing
2. Automatic transaction signing using Warden keychains
3. Domain validation
4. Amount limits ($100)
5. Cooldown enforcement (24h)

## File Structure

```typescript
src/
├── config/
│   ├── constants.ts         # Configuration constants
│   └── warden.config.ts     # Warden setup configuration
├── services/
│   ├── email/
│   │   ├── parser.ts        # Email parsing logic
│   │   └── validator.ts     # Domain & format validation
│   ├── payments/
│   │   ├── processor.ts     # Payment processing logic
│   │   └── warden.ts        # Warden integration
│   └── database/
│       ├── schema.ts        # Database schema
│       └── client.ts        # Database operations
├── types/
│   └── index.ts            # Type definitions
├── utils/
│   ├── validation.ts       # Validation helpers
│   └── formatting.ts       # Data formatting utilities
└── index.ts               # Application entry point
```

---

**Notice:** The idea is inspired by this [hackathon idea](https://github.com/CyberHoward/dao-mail) of Abstract Team. However, no code is directly adopted from them. 
