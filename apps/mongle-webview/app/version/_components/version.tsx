'use client';
import { Button, Text } from '@mgmg/ui/components/ui';

import React from 'react';
import revision from 'revision.json';
import { CustomDrawer } from '@mgmg/ui/components/custom';

const Version = () => {
  return (
    <div>
      <div>revision : {revision.revision}</div>
      <div>branch: {revision.branch}</div>
      <div>lastCommit: {revision.lastCommitDate}</div>
      <CustomDrawer.Root>
        <CustomDrawer.Trigger>
          <Button>Click</Button>
        </CustomDrawer.Trigger>
        <CustomDrawer.Content>
          <Text typography="sm-b" color="warning">
            Test Text
          </Text>
        </CustomDrawer.Content>
      </CustomDrawer.Root>
    </div>
  );
};

export default Version;
