import { DatabaseOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PluginManager } from '../plugin-manager';
import { ActionContext, SchemaComponent } from '../schema-component';
import { schema } from './admin/schemas/collection';
import { AddFieldAction, ConfigurationTable, EditFieldAction } from './Configuration';

export const CollectionManagerShortcut = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  return (
    <ActionContext.Provider value={{ visible, setVisible }}>
      <PluginManager.Toolbar.Item
        icon={<DatabaseOutlined />}
        title={t('Collections & Fields')}
        onClick={() => {
          setVisible(true);
        }}
      />
      <SchemaComponent schema={schema} components={{ ConfigurationTable, AddFieldAction, EditFieldAction }} />
    </ActionContext.Provider>
  );
};
