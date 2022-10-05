import { HydraAdmin } from '@api-platform/admin';
import React from 'react';
import data from '../data';

const Admin = () => {
  return (
    <HydraAdmin dataProvider={data.dataProvider} entrypoint={data.entrypoint} />
  );
};

export default Admin;
