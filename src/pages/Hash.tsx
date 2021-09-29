import { withRouter } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { connect, WepState } from '../utils/wep-state';
import { RouteComponentProps } from 'react-router-dom';

type Props = WepState &
  RouteComponentProps<{
    hash: string;
  }>;

const Test = ({
  setState,
  key,
  match: {
    params: { hash },
  },
}: Props) => {
  console.log('key:', key);
  return (
    <PageContainer>
      <p className="">{hash}</p>
    </PageContainer>
  );
};

export default connect('key')(withRouter(Test));
