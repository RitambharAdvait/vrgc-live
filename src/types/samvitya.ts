export interface SamvityaPassHolder {
  email: string;
  name: string;
  regNumber: string;
  vtopTransactionId?: string;
  passType: 'SAMVITYA_FEST_PASS' | 'VIP_ALL_ACCESS';
}

export interface GeneratedGtaTicket {
  ticketId: string;
  userEmail: string;
  userName: string;
  regNumber: string;
  vtopTransactionId: string;
  eventTitle: string;
  venue: string;
  issuedAt: string;
  slotTime: string;
  category: string;
  qrPayload: string;
  verificationCode: string;
}

// Sample whitelist of students who bought Samvitya tickets via VTOP
// (Can be synced or queried from Firebase / backend CSV import)
export const MOCK_SAMVITYA_BUYERS: SamvityaPassHolder[] = [
  {
    email: 'test@vitbhopal.ac.in',
    name: 'Player One',
    regNumber: '23BCE10001',
    vtopTransactionId: 'VTOP-SMV-88291',
    passType: 'SAMVITYA_FEST_PASS',
  },
  {
    email: 'gamer@vitbhopal.ac.in',
    name: 'Vice Specialist',
    regNumber: '23BCE10428',
    vtopTransactionId: 'VTOP-SMV-94012',
    passType: 'VIP_ALL_ACCESS',
  },
  {
    email: 'vrgc@vitbhopal.ac.in',
    name: 'VRGC Club Member',
    regNumber: '22BCE10890',
    vtopTransactionId: 'VTOP-SMV-77123',
    passType: 'SAMVITYA_FEST_PASS',
  },
];
