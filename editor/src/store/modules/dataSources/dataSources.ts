import { RootState } from '@/store/types';
import { Module } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { make } from 'vuex-pathify';

export interface DataSourcesState {
  lists: any;
  collections: any;
  apis: any;
  databases: any;
}

const state: DataSourcesState = {
  lists: [
    {
      id: 'u1oiwe786123io',
      name: 'Alphabet',
      type: 'list',
      schema: [
        {
          id: 'id',
          type: 'string',
          name: 'Id',
        },
        {
          id: 'value',
          type: 'string',
          name: 'Value',
        },
      ],
      data: [
        {
          id: 'A',
          value: 'A',
        },
        {
          id: 'B',
          value: 'B',
        },
        {
          id: 'C',
          value: 'C',
        },
        {
          id: 'D',
          value: 'D',
        },
        {
          id: 'E',
          value: 'E',
        },
        {
          id: 'F',
          value: 'F',
        },
        {
          id: 'G',
          value: 'G',
        },
        {
          id: 'H',
          value: 'H',
        },
        {
          id: 'I',
          value: 'I',
        },
        {
          id: 'J',
          value: 'J',
        },
        {
          id: 'K',
          value: 'K',
        },
        {
          id: 'L',
          value: 'L',
        },
        {
          id: 'M',
          value: 'M',
        },
        {
          id: 'N',
          value: 'N',
        },
        {
          id: 'O',
          value: 'O',
        },
        {
          id: 'P',
          value: 'P',
        },
      ],
    },
    {
      id: '123uiqae90182',
      name: 'Gender',
      type: 'list',
      schema: [
        {
          id: 'id',
          type: 'string',
          name: 'Id',
        },
        {
          id: 'value',
          type: 'string',
          name: 'Value',
        },
      ],
      data: [
        {
          id: 'M',
          value: 'Male',
        },
        {
          id: 'F',
          value: 'Female',
        },
      ],
    },
    {
      id: '1y3y2378hns989',
      name: 'Programming Languages',
      type: 'list',
      schema: [
        {
          id: 'id',
          type: 'string',
          name: 'Id',
        },
        {
          id: 'value',
          type: 'string',
          name: 'Value',
        },
      ],
      data: [
        {
          id: 'java',
          value: 'Java',
        },
        {
          id: 'js',
          value: 'Javascript',
        },
        {
          id: 'php',
          value: 'PHP',
        },
        {
          id: 'pearl',
          value: 'Pearl',
        },
        {
          id: 'ruby',
          value: 'Ruby',
        },
        {
          id: 'python',
          value: 'Python',
        },
        {
          id: 'flutter',
          value: 'Flutter',
        },
        {
          id: 'c',
          value: 'C#',
        },
      ],
    },
  ],
  collections: {
    users: {
      type: 'collection',
      schema: [
        {
          id: 'id',
          type: 'string',
          name: 'Id 1',
        },
        {
          id: 'name',
          type: 'string',
          name: 'Name',
        },
        {
          id: 'countries',
          type: 'string',
          name: 'Countries',
        },
        {
          field: 'location',
          type: 'string',
          name: 'Location',
        },
      ],
      data: [
        {
          id: '1',
          name: 'henry',
          countries: 'bolivia',
          location: 'La paz',
        },
        {
          id: '2',
          name: 'henry',
          countries: 'bolivia',
          location: 'La paz',
        },
        {
          id: '3',
          name: 'henry',
          countries: 'bolivia',
          location: 'La paz',
        },
        {
          id: '4',
          name: 'henry',
          countries: 'bolivia',
          location: 'La paz',
        },
        {
          id: '5',
          name: 'henry',
          countries: 'bolivia',
          location: 'La paz',
        },
      ],
    },
    abc: {
      type: 'list',
      schema: [
        {
          id: 'id',
          type: 'string',
          name: 'ID',
        },
        {
          id: 'value',
          type: 'string',
          name: 'Value',
        },
      ],
      data: [
        {
          id: 'A',
          value: 'A',
        },
        {
          id: 'B',
          value: 'B',
        },
        {
          id: 'C',
          value: 'C',
        },
        {
          id: 'D',
          value: 'D',
        },
        {
          id: 'E',
          value: 'E',
        },
        {
          id: 'F',
          value: 'F',
        },
        {
          id: 'G',
          value: 'G',
        },
        {
          id: 'H',
          value: 'H',
        },
      ],
    },
  },
  apis: [
    {
      id: '123uiqae90182',
      name: 'Processmaker',
      data: {
        url: 'http://www.google.com',
        method: 'POST',
        params: { p: 'p' },
        headers: { h: 'h' },
        body: { b: 'b' },
        dataInputVariables: ['var1', 'var2'],
        output: 'outputPath',
      },
    },
  ],
  databases: {},
};

const dataSources: Module<DataSourcesState, RootState> = {
  namespaced: true,
  state,
  ...{
    mutations: {
      ...make.mutations(state),
      ...mutations,
    },
  },
  ...{
    actions: {
      ...make.actions(state),
      ...actions,
    },
  },
  ...{
    getters: {
      ...make.getters(state),
      ...getters,
    },
  },
};

export default dataSources;
