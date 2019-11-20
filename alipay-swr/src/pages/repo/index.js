import * as React from 'react';
import { View, Navigator } from 'remax/alipay';
import List from 'mini-antui/es/list';
import ListItem from 'mini-antui/es/list/list-item';
import useSWR from 'swr';

export default ({ location }) => {
  const { data } = useSWR('/repos/remaxjs/' + location.query.repo);

  return (
    <View style={{ width: '100%' }}>
      <List>
        <ListItem className="am-list-sticky">remaxjs/{location.query.repo}</ListItem>
        {data ? (
          <>
            <ListItem>forks: {data.forks_count}</ListItem>
            <ListItem>stars: {data.stargazers_count}</ListItem>
            <ListItem last>watchers: {data.watchers}</ListItem>
            <ListItem>
              <Navigator openType="navigateBack">Back</Navigator>
            </ListItem>
          </>
        ) : (
          <ListItem>Loading...</ListItem>
        )}
      </List>
    </View>
  );
};
