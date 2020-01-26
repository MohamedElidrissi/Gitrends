import React from 'react';
import InfiniteScroller from 'react-infinite-scroller';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { fetchRepos } from '../context/repos/ReposActions';
import { useRepos } from '../context/repos/ReposContext';
import Repo from './Repo';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  gridItem: {
    marginTop: theme.spacing(2),
  },
}));

function ReposList() {
  const classes = useStyles();

  const [state, dispatch] = useRepos();

  return (
    <Container className={classes.container}>
      <Grid container justify="center">
        <InfiniteScroller
          initialLoad={true}
          pageStart={0}
          hasMore={state.repos.hasMore}
          loadMore={page => fetchRepos(dispatch, page)}
        >
          {state.repos.items.map(
            ({ id, name, owner, description, html_url }) => (
              <Grid item key={id} className={classes.gridItem} xs={12} md={9}>
                <Repo
                  name={name}
                  ownerName={owner.login}
                  ownerAvatar={owner.avatar_url}
                  desc={description}
                  repoUrl={html_url}
                />
              </Grid>
            )
          )}
        </InfiniteScroller>
      </Grid>
    </Container>
  );
}

export default ReposList;
