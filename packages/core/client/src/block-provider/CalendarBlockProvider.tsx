import { ArrayField } from '@formily/core';
import { useField } from '@formily/react';
import React, { createContext, useContext, useEffect } from 'react';
import { useFixedSchema } from '../schema-component';
import { BlockProvider, useBlockRequestContext } from './BlockProvider';

export const CalendarBlockContext = createContext<any>({});

const InternalCalendarBlockProvider = (props) => {
  const { fieldNames, showLunar } = props;
  const field = useField();
  const { resource, service } = useBlockRequestContext();
  const fixedBlock = useFixedSchema()
  // if (service.loading) {
  //   return <Spin />;
  // }
  return (
    <CalendarBlockContext.Provider
      value={{
        field,
        service,
        resource,
        fieldNames,
        showLunar,
        fixedBlock,
      }}
    >
      {props.children}
    </CalendarBlockContext.Provider>
  );
};

export const CalendarBlockProvider = (props) => {
  return (
    <BlockProvider {...props} params={{ ...props.params, paginate: false }}>
      <InternalCalendarBlockProvider {...props} />
    </BlockProvider>
  );
};

export const useCalendarBlockContext = () => {
  return useContext(CalendarBlockContext);
};

export const useCalendarBlockProps = () => {
  const ctx = useCalendarBlockContext();
  const field = useField<ArrayField>();
  useEffect(() => {
    if (!ctx?.service?.loading) {
      field.componentProps.dataSource = ctx?.service?.data?.data;
    }
  }, [ctx?.service?.loading]);
  return {
    fieldNames: ctx.fieldNames,
    showLunar: ctx.showLunar,
    fixedBlock: ctx.fixedBlock
  };
};
