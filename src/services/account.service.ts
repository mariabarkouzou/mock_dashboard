import { computed, effect, Injectable, signal } from '@angular/core';

export interface DepositEntry {
  date: string;
  amount: number;
  method: string;
  notes?: string;
}

const STORAGE_KEY = 'deposit_history';
const INITIAL_BALANCE = 1000;

@Injectable({ providedIn: 'root' })
export class MyAccountService {
  private readonly _deposits = signal<DepositEntry[]>(this.loadDeposits());
  readonly deposits = this._deposits.asReadonly();

  readonly balance = computed(() =>
    this._deposits().reduce((sum, d) => sum + d.amount, INITIAL_BALANCE),
  );

  constructor() {
    effect(() => this.saveDeposits(this._deposits()));
  }

  addDeposit(amount: number, method: string, notes?: string): void {
    if (!Number.isFinite(amount) || amount <= 0) {
      throw new RangeError('Deposit amount must be a positive number.');
    }
    const newEntry: DepositEntry = {
      date: new Date().toISOString(),
      amount,
      method,
      notes,
    };

    this._deposits.update((deposits) => [newEntry, ...deposits]);
  }

  private loadDeposits(): DepositEntry[] {
    try {
      const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as DepositEntry[]) : [];
    } catch {
      return [];
    }
  }

  private saveDeposits(deposits: DepositEntry[]): void {
    try {
      globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(deposits));
    } catch {}
  }
}
