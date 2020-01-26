import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Repo({ name, ownerName, ownerAvatar, desc, repoUrl }) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label={`${ownerName}'s Avatar`} src={ownerAvatar} />
        }
        title={name}
        subheader={`By ${ownerName}`}
      />
      {desc && (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      )}
      <CardActions>
        <Button
          component={Link}
          href={repoUrl}
          target="_blank"
          rel="noopenner noreferrer"
          size="small"
          color="primary"
        >
          View on GitHub
        </Button>
      </CardActions>
    </Card>
  );
}

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  ownerAvatar: PropTypes.string.isRequired,
  desc: PropTypes.string,
  repoUrl: PropTypes.string.isRequired,
};

export default Repo;
