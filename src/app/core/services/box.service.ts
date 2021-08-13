import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, Subject, Subscription } from 'rxjs';
import { BoxInterface } from '../interfaces/box.interface';
import { OpenBoxInterface } from '../interfaces/open-box.interface';

@Injectable({
    providedIn: 'root'
})
export class BoxService {
    private queryGetBoxesSubscription: Subscription;
    private queryOpenBoxSubscription: Subscription;
    public counter = 0;

    constructor(private apollo: Apollo) {}

    getBoxes(params): Observable<BoxInterface[]> {
        const subject = new Subject<BoxInterface[]>();
        const free = params.free ? params.free : null;
        const purchasable = params.purchasable ? params.purchasable : null;
        const openable = params.free ? params.free : null;
        const GET_POST = gql`
            {
                boxes(free: ${free}, purchasable: ${purchasable}, openable: ${openable}) {
                    edges {
                        node {
                            id
                            name
                            levelRequired
                            maxPurchasesDaily
                            free
                            purchasable
                            openable
                            iconUrl
                            price
                        }
                    }
                }
            }
        `;
        this.queryGetBoxesSubscription = this.apollo
            .watchQuery<any>({
                query: GET_POST
            })
            .valueChanges.subscribe((response) => {
                const edges = response.data.boxes.edges;
                const boxes: BoxInterface[] = edges.map((x) => x.node);
                return subject.next(boxes);
            });
        return subject.asObservable();
    }

    openBox(id: string): Observable<OpenBoxInterface> {
        const subject = new Subject<OpenBoxInterface>();
        const GET_POST = gql`
            mutation OpenBox($boxId: ID!) {
                openBox(input: { boxId: $boxId, amount: 1 }) {
                    box {
                        id
                        name
                        levelRequired
                        maxPurchasesDaily
                        free
                        purchasable
                        openable
                        iconUrl
                        price
                    }
                    boxOpenings {
                        id
                        boxValue
                        itemValue
                        profit
                        currency
                    }
                }
            }
        `;

        this.queryOpenBoxSubscription = this.apollo
            .mutate({
                mutation: GET_POST,
                variables: {
                    boxId: id
                }
            })
            .subscribe(
                (response: any) => {
                    return subject.next(response.data.openBox);

                    // ! I have to mock the response because I cannot get the OK response. I am level ONE
                    // const mockResult: any = require('../../../mock/box-opening.json');
                    // return subject.next(mockResult.data.openBox);
                },
                (err) => {
                    console.error('OpenBox ERROR');
                    return subject.error(err);
                    // ! I Mocked the result to OK in some cases to check how will be the OK response
                    // this.counter += 1;
                    // if (this.counter % 3 === 0) {
                    //     const mockResult: any = require('../../../mock/box-opening.json');
                    //     return subject.next(mockResult.data.openBox);
                    // } else {
                    //     return subject.error(err);
                    // }
                }
            );
        return subject.asObservable();
    }

    unsubscribe() {
        this.queryGetBoxesSubscription.unsubscribe();
        this.queryOpenBoxSubscription.unsubscribe();
    }

    mockDataResponse() {}
}
