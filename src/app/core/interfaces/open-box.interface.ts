import { BoxOpeningInterface } from './box-opening.interface';
import { BoxInterface } from './box.interface';

export interface OpenBoxInterface {
    box: BoxInterface;
    boxOpenings: BoxOpeningInterface;
}
