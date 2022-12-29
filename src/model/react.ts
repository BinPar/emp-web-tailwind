/* eslint-disable @typescript-eslint/ban-types */
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export type WithChildren<T = {}> = { children?: React.ReactNode | undefined } & T;

export type WithClassName<T = {}> = { className?: string } & T;

export type WithViewBox<T = {}> = { viewBox?: string } & T;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}
