'use client';

import React from 'react';
import { HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://graphql.anilist.co',
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: httpLink,
  });
}

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
