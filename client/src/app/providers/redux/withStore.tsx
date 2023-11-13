import {setupStore} from "@/app/store";
import React from "react";
import {Provider} from "react-redux";

const store = setupStore()

export const withStore = (Component: React.ComponentType<any>) => (props: any) => {

    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    )
}