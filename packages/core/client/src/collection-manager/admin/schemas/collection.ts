import { ISchema } from '@formily/react';
import { uid } from '@formily/shared';
import { CollectionOptions } from '../../types';
import { collectionFieldsTableBlockSchema } from './fields';

const collection: CollectionOptions = {
  name: 'collections',
  filterTargetKey: 'name',
  targetKey: 'name',
  fields: [
    {
      type: 'integer',
      name: 'title',
      interface: 'input',
      uiSchema: {
        title: '{{ t("Collection display name") }}',
        type: 'number',
        'x-component': 'Input',
        required: true,
      },
    },
    {
      type: 'string',
      name: 'name',
      interface: 'input',
      uiSchema: {
        title: '{{ t("Collection name") }}',
        type: 'string',
        'x-component': 'Input',
        description:
          '{{t("Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.")}}',
      },
    },
    // {
    //   type: 'hasMany',
    //   name: 'fields',
    //   target: 'fields',
    //   collectionName: 'collections',
    //   sourceKey: 'name',
    //   targetKey: 'name',
    //   uiSchema: {},
    // },
  ],
};

export const schema: ISchema = {
  type: 'object',
  properties: {
    [uid()]: {
      'x-component': 'Action.Drawer',
      type: 'void',
      title: '{{t("Collections & Fields")}}',
      properties: {
        ga1mnx2uqq2: {
          type: 'void',
          'x-decorator': 'TableBlockProvider',
          'x-decorator-props': {
            collection: collection,
            resource: 'collections',
            action: 'list',
            params: {
              pageSize: 20,
            },
            rowKey: 'key',
            showIndex: true,
            dragSort: true,
          },
          'x-component': 'div',
          properties: {
            actions: {
              type: 'void',
              'x-component': 'ActionBar',
              'x-component-props': {
                style: {
                  marginBottom: 16,
                },
              },
              properties: {
                '46ra772xy2q': {
                  type: 'void',
                  title: '{{ t("Add new") }}',
                  'x-action': 'create',
                  'x-designer': 'Action.Designer',
                  'x-component': 'Action',
                  'x-component-props': {
                    icon: 'PlusOutlined',
                    openMode: 'drawer',
                    type: 'primary',
                  },
                  'x-align': 'right',
                  'x-decorator': 'ACLActionProvider',
                  'x-acl-action-props': {
                    skipScopeCheck: true,
                  },
                  properties: {
                    drawer: {
                      type: 'void',
                      title: '{{ t("Add record") }}',
                      'x-component': 'Action.Container',
                      'x-component-props': {
                        className: 'nb-action-popup',
                      },
                      properties: {
                        tabs: {
                          type: 'void',
                          'x-component': 'Tabs',
                          'x-component-props': {},
                          'x-initializer': 'TabPaneInitializers',
                          properties: {
                            tab1: {
                              type: 'void',
                              title: '{{t("Add new")}}',
                              'x-component': 'Tabs.TabPane',
                              'x-designer': 'Tabs.Designer',
                              'x-component-props': {},
                              properties: {
                                grid: {
                                  type: 'void',
                                  'x-component': 'Grid',
                                  'x-initializer': 'CreateFormBlockInitializers',
                                  properties: {
                                    '7ibsqx8j9i0': {
                                      type: 'void',
                                      'x-component': 'Grid.Row',
                                      properties: {
                                        ks7v82j6s7k: {
                                          type: 'void',
                                          'x-component': 'Grid.Col',
                                          properties: {
                                            r035a4cmqv7: {
                                              type: 'void',
                                              'x-acl-action-props': {
                                                skipScopeCheck: true,
                                              },
                                              'x-acl-action': 'users:create',
                                              'x-decorator': 'FormBlockProvider',
                                              'x-decorator-props': {
                                                resource: 'users',
                                                collection: 'users',
                                              },
                                              'x-designer': 'FormV2.Designer',
                                              'x-component': 'CardItem',
                                              properties: {
                                                '58635oujvl4': {
                                                  type: 'void',
                                                  'x-component': 'FormV2',
                                                  'x-component-props': {
                                                    useProps: '{{ useFormBlockProps }}',
                                                  },
                                                  properties: {
                                                    grid: {
                                                      type: 'void',
                                                      'x-component': 'Grid',
                                                      'x-initializer': 'FormItemInitializers',
                                                      properties: {
                                                        g9urziavvse: {
                                                          type: 'void',
                                                          'x-component': 'Grid.Row',
                                                          properties: {
                                                            b39w0lgyrfl: {
                                                              type: 'void',
                                                              'x-component': 'Grid.Col',
                                                              properties: {
                                                                nickname: {
                                                                  type: 'string',
                                                                  'x-designer': 'FormItem.Designer',
                                                                  'x-component': 'CollectionField',
                                                                  'x-decorator': 'FormItem',
                                                                  'x-collection-field': 'users.nickname',
                                                                  'x-component-props': {},
                                                                  // 'x-uid': 'vqzxbdmn0ku',

                                                                  // 'x-index': 1,
                                                                },
                                                              },
                                                              // 'x-uid': 't9qzwybuffb',

                                                              // 'x-index': 1,
                                                            },
                                                          },
                                                          // 'x-uid': 'p02i2izy7xq',

                                                          // 'x-index': 1,
                                                        },
                                                      },
                                                      // 'x-uid': 'dc0jbrauo2g',

                                                      // 'x-index': 1,
                                                    },
                                                    actions: {
                                                      type: 'void',
                                                      'x-initializer': 'CreateFormActionInitializers',
                                                      'x-component': 'ActionBar',
                                                      'x-component-props': {
                                                        layout: 'one-column',
                                                        style: {
                                                          marginTop: 24,
                                                        },
                                                      },
                                                      properties: {
                                                        y6fktlai8hs: {
                                                          title: '{{ t("Submit") }}',
                                                          'x-action': 'submit',
                                                          'x-component': 'Action',
                                                          'x-designer': 'Action.Designer',
                                                          'x-component-props': {
                                                            type: 'primary',
                                                            htmlType: 'submit',
                                                            useProps: '{{ useCreateActionProps }}',
                                                          },
                                                          'x-action-settings': {},
                                                          type: 'void',
                                                          // 'x-uid': 's8gsi7olgka',

                                                          // 'x-index': 1,
                                                        },
                                                      },
                                                      // 'x-uid': 'opaz94bmr8t',

                                                      // 'x-index': 2,
                                                    },
                                                  },
                                                  // 'x-uid': 'y13y7nok4gk',

                                                  // 'x-index': 1,
                                                },
                                              },
                                              // 'x-uid': 'qllavb2pvrq',

                                              // 'x-index': 1,
                                            },
                                          },
                                          // 'x-uid': 'c2h7vlr064h',

                                          // 'x-index': 1,
                                        },
                                      },
                                      // 'x-uid': 'qvpnz9lea03',

                                      // 'x-index': 1,
                                    },
                                  },
                                  // 'x-uid': '83fs0se7tdw',

                                  // 'x-index': 1,
                                },
                              },
                              // 'x-uid': '6y768o3co3w',

                              // 'x-index': 1,
                            },
                          },
                          // 'x-uid': 'ulfn6n29x7l',

                          // 'x-index': 1,
                        },
                      },
                      // 'x-uid': 'r9na6893he6',

                      // 'x-index': 1,
                    },
                  },
                  // 'x-uid': '9stpikhsokj',

                  // 'x-index': 1,
                },
                x2r1247uskx: {
                  title: '{{ t("Delete") }}',
                  'x-action': 'destroy',
                  'x-component': 'Action',
                  'x-designer': 'Action.Designer',
                  'x-component-props': {
                    icon: 'DeleteOutlined',
                    confirm: {
                      title: "{{t('Delete record')}}",
                      content: "{{t('Are you sure you want to delete it?')}}",
                    },
                    useProps: '{{ useBulkDestroyActionProps }}',
                  },
                  'x-align': 'right',
                  type: 'void',
                },
              },
            },
            qtj7oniwuj7: {
              type: 'array',
              'x-component': 'TableV2',
              'x-component-props': {
                rowKey: 'id',
                rowSelection: {
                  type: 'checkbox',
                },
                useProps: '{{ useTableBlockProps }}',
              },
              properties: {
                '4x8n72xdukq': {
                  type: 'void',
                  'x-decorator': 'TableV2.Column.Decorator',
                  'x-component': 'TableV2.Column',
                  properties: {
                    title: {
                      'x-component': 'CollectionField',
                      'x-read-pretty': true,
                      'x-component-props': {
                        ellipsis: true,
                      },
                    },
                  },
                },
                '4x8s72xdukq': {
                  type: 'void',
                  'x-decorator': 'TableV2.Column.Decorator',
                  'x-component': 'TableV2.Column',
                  properties: {
                    name: {
                      'x-component': 'CollectionField',
                      'x-read-pretty': true,
                      'x-component-props': {
                        ellipsis: true,
                      },
                    },
                  },
                },
                actions: {
                  type: 'void',
                  title: '{{ t("Actions") }}',
                  'x-action-column': 'actions',
                  'x-decorator': 'TableV2.Column.ActionBar',
                  'x-component': 'TableV2.Column',
                  properties: {
                    actions: {
                      type: 'void',
                      'x-decorator': 'DndContext',
                      'x-component': 'Space',
                      'x-component-props': {
                        split: '|',
                      },
                      properties: {
                        m36j2l7ogjn: {
                          type: 'void',
                          title: '{{ t("Configure fields") }}',
                          'x-action': 'view',
                          'x-component': 'Action.Link',
                          'x-component-props': {
                            openMode: 'drawer',
                          },
                          properties: {
                            drawer: {
                              type: 'void',
                              title: '{{ t("Configure fields") }}',
                              'x-component': 'Action.Container',
                              properties: {
                                collectionFieldsTableBlockSchema
                              },
                            },
                          },
                        },
                        qu7wpjryqa8: {
                          type: 'void',
                          title: '{{ t("Edit") }}',
                          'x-action': 'update',
                          'x-designer': 'Action.Designer',
                          'x-component': 'Action.Link',
                          'x-component-props': {
                            openMode: 'drawer',
                            icon: 'EditOutlined',
                          },
                          'x-decorator': 'ACLActionProvider',
                          properties: {
                            drawer: {
                              type: 'void',
                              title: '{{ t("Edit record") }}',
                              'x-component': 'Action.Container',
                              'x-component-props': {
                                className: 'nb-action-popup',
                              },
                              properties: {
                                tabs: {
                                  type: 'void',
                                  'x-component': 'Tabs',
                                  'x-component-props': {},
                                  'x-initializer': 'TabPaneInitializers',
                                  properties: {
                                    tab1: {
                                      type: 'void',
                                      title: '{{t("Edit")}}',
                                      'x-component': 'Tabs.TabPane',
                                      'x-designer': 'Tabs.Designer',
                                      'x-component-props': {},
                                      properties: {
                                        grid: {
                                          type: 'void',
                                          'x-component': 'Grid',
                                          'x-initializer': 'RecordBlockInitializers',
                                          // 'x-uid': '8w9pif6dooe',

                                          // 'x-index': 1,
                                        },
                                      },
                                      // 'x-uid': 't3m5he8ia2b',

                                      // 'x-index': 1,
                                    },
                                  },
                                  // 'x-uid': '3tv33o54vf2',

                                  // 'x-index': 1,
                                },
                              },
                              // 'x-uid': 'ppj284oswgx',

                              // 'x-index': 1,
                            },
                          },
                          // 'x-uid': 'qjgbferqnsn',

                          // 'x-index': 2,
                        },
                        yc6azov5ev9: {
                          title: '{{ t("Delete") }}',
                          'x-action': 'destroy',
                          'x-component': 'Action.Link',
                          'x-designer': 'Action.Designer',
                          'x-component-props': {
                            icon: 'DeleteOutlined',
                            confirm: {
                              title: "{{t('Delete record')}}",
                              content: "{{t('Are you sure you want to delete it?')}}",
                            },
                            useProps: '{{ useDestroyActionProps }}',
                          },
                          'x-decorator': 'ACLActionProvider',
                          type: 'void',
                          // 'x-uid': '1yeccy9409k',

                          // 'x-index': 3,
                        },
                      },
                    },
                  },
                  // 'x-uid': 'txv7qspa8z1',
                },
              },
              // 'x-uid': 'm1y8j936mec',

              // 'x-index': 2,
            },
          },
          // 'x-uid': 'oaibsgndv5f',

          // 'x-index': 1,
        },
      },
    },
  },
};
