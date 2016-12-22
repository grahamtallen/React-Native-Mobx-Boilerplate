/**
 * Created by grahamallen on 12/21/16.
 */

import {observable, computed, action} from 'mobx'

class NumberStore {
    @observable left = 1;

    addOneToLeft() {
        this.left++
    }

    @observable right = 2;

    @observable operator = "-"

    @computed get center() {
        if (this.operator == "-") return this.left - this.right;
        return this.left + this.right;
    }
}

export const addOneToRight = action((store) => {
    store.right++
})

export const numberStore = new NumberStore();

