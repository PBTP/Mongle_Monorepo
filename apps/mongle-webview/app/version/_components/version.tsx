'use client';
import { Button, Text } from '@mgmg/ui/ui';
import React from 'react';
import revision from 'revision.json';
const Version = () => {
  return (
    <div>
      <div>revision : {revision.revision}</div>
      <div>branch: {revision.branch}</div>
      <div>lastCommit: {revision.lastCommitDate}</div>
      <Button>Click</Button>
      <Text typography="sm-b" color="warning">
        Test Text
      </Text>
    </div>
  );
};

export default Version;
