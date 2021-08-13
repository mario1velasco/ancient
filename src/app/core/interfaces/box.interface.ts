export interface BoxInterface {
    id: string;
    name: string;
    iconUrl: string;
    levelRequired: number;
    maxPurchasesDaily: number;
    price: number;
    free: boolean;
    purchasable: boolean;
    openable: boolean;
}
