//import { useRouteError } from 'react-router-dom';
import React from 'react'


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Sorry!</h1>
      <p>An unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
