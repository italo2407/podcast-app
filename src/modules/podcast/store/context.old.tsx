// import { castDraft } from 'immer';
// import React, { createContext, FC, ReactNode } from 'react';
// import { useImmerReducer } from 'use-immer';
// import { appReducer, AppState, DispatchApp, initialState } from './reducer';

// export interface AppProviderInterface {
//   children: ReactNode;
// }

// const AppStateContext = createContext<AppState | undefined>(undefined);
// const AppDispatchContext = createContext<DispatchApp | undefined>(undefined);

// const GlobalAppProvider: FC<AppProviderInterface> = ({ children }: AppProviderInterface) => {
//   const [state, dispatch] = useImmerReducer(appReducer, initialState);

//   return (
//     <AppStateContext.Provider value={castDraft({ ...state })}>
//       <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
//     </AppStateContext.Provider>
//   );
// };

// const useGlobalAppState = (): AppState => {
//   const context = React.useContext(AppStateContext) as AppState;

//   if (context === undefined) {
//     throw new Error('useAppState must be used within a AppStateContext');
//   }

//   return context;
// };

// const useGlobalAppDispatch = (): DispatchApp => {
//   const context = React.useContext(AppDispatchContext) as DispatchApp;

//   if (context === undefined) {
//     throw new Error('useGlobalAppDispatch must be used within a AppDispatchContext');
//   }

//   return context;
// };

// export { GlobalAppProvider, useGlobalAppState, useGlobalAppDispatch };


