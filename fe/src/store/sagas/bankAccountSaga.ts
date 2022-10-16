import { call, put } from "redux-saga/effects";
import { BankAccountModel } from "../../models/BankAccountModel";
import bankAccountService from "../../services/bankAccountService";
import { updateBankAccount } from "../actions/bankAccountTypes";
import { setBankAccount } from "../slices/bankAccountSlice";

export function* handleGetBankAccount(): Generator<any, void, BankAccountModel> {
  try {
    const bankAccount: BankAccountModel = yield call(bankAccountService.getBankAccount);

    yield put(setBankAccount(bankAccount));
  } catch (error: any) {
    console.log(error);
  }
}

export function* handleUpdateBankAccount({
  payload,
}: ReturnType<typeof updateBankAccount>): Generator<any, void, BankAccountModel> {
  try {
    yield call(
      bankAccountService.updateBankAccount,
      payload
    );
    yield call(handleGetBankAccount);
  } catch (error: any) {
    console.log(error);
  }
}
