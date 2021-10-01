import { connect } from '../utils/wep-state';
import PageContainer from '../components/PageContainer';

const contractAddress = 'vite_99be0b35adc94fe8e334dd8a36786d18aef466e877112f704c';

const Home = () => {
  return (
    <PageContainer>
      <p className="text-3xl text-center">Record timestamped notes that never disappear or change</p>
      <div>
        <p className="text-3xl">Uses</p>
        <ol className="text-2xl list-disc list-inside">
          <li>Proving originality</li>
          <li>Verifiable status updates</li>
          <li>Preserving history</li>
          <li>Giving and receiving crypto tips</li>
        </ol>
      </div>
      <div>
        <p className="text-3xl">Roadmap</p>
        <ol className="text-2xl list-disc list-inside">
          <li>UI/UX improvements</li>
          <li>Governance token + DAO</li>
          <li>Token curated list of notable notes</li>
        </ol>
      </div>
      <div>
        <p className="text-3xl">Contract</p>
        <ol className="text-2xl list-disc list-inside">
          <li>{contractAddress}</li>
          <li>Make sure you are calling this contract when using Immutable Notes</li>
        </ol>
      </div>
    </PageContainer>
  );
};

export default connect('key')(Home);
