import { useEffect, useState } from 'react';
import { callOffChain, CONTRACT } from '../utils/vitescripts';
import A from '../components/A';

const Home = () => {
  const [totalNotes, totalNotesSet] = useState<number>();
  useEffect(() => {
    callOffChain('getTotalNotes').then((res) => {
      totalNotesSet(+res!);
    });
  }, []);
  return (
    <div>
      <div className="bg-white">
        <div className="page-row xy h-[36rem]">
          <p className="text-7xl text-center font-extrabold">Immutable Notes</p>
          <p className="mt-2 text-4xl text-center text-gray-500">Timestamped text that can't be changed</p>
          <A
            href="https://app.immutablenotes.com/"
            className="mt-9 font-semibold rounded-xl px-5 py-3 text-2xl bg-blue-500 text-white shadow"
          >
            Launch app
          </A>
        </div>
      </div>
      <div className="page-row">
        <div className="mt-8 mb-12 md:flex">
          <div className="cell mb-12 md:mb-0 md:flex-1 md:mr-8">
            <p>Uses</p>
            <ul className="text-3xl list-disc">
              <li>Proving originality</li>
              <li>Verifiable status updates</li>
              <li>Preserving history</li>
              <li>Tipping with crypto</li>
            </ul>
          </div>
          <div className="cell md:flex-1">
            <p>Roadmap</p>
            <ul className="text-3xl list-disc">
              <li>UI/UX improvements</li>
              <li>Governance token + DAO</li>
              <li>Token curated list of notable notes</li>
            </ul>
          </div>
        </div>
        <div className="cell">
          <p>Contract</p>
          <p className="text-3xl break-all">{CONTRACT.address}</p>
          <p className="text-2xl text-gray-600 mt-2">
            Make sure you are calling this contract when using Immutable Notes
          </p>
        </div>
        <p className="mt-8 text-center text-3xl text-gray-500">{totalNotes || '...'} notes total</p>
        <div className="flex space-x-4 text-gray-500 justify-center mt-4">
          <A title="GitHub" href="https://github.com/ImmutableNotes">
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M10 0C4.4775 0 0 4.54761 0 10.1566C0 14.9158 3.22667 18.898 7.57667 20C7.53 19.8629 7.5 19.7038 7.5 19.5066V17.7706C7.09417 17.7706 6.41417 17.7706 6.24333 17.7706C5.55917 17.7706 4.95083 17.4719 4.65583 16.9166C4.32833 16.2996 4.27167 15.3559 3.46 14.7787C3.21917 14.5865 3.4025 14.3673 3.68 14.397C4.1925 14.5442 4.6175 14.9014 5.0175 15.4312C5.41583 15.9619 5.60333 16.0821 6.3475 16.0821C6.70833 16.0821 7.24833 16.0609 7.75667 15.9797C8.03 15.2747 8.5025 14.6255 9.08 14.3191C5.75 13.9712 4.16083 12.2886 4.16083 10.0042C4.16083 9.02074 4.57333 8.0694 5.27417 7.26788C5.04417 6.47228 4.755 4.84977 5.3625 4.23191C6.86083 4.23191 7.76667 5.21879 7.98417 5.4854C8.73083 5.22556 9.55083 5.07829 10.4125 5.07829C11.2758 5.07829 12.0992 5.22556 12.8475 5.48709C13.0625 5.22218 13.9692 4.23191 15.4708 4.23191C16.0808 4.85061 15.7883 6.4799 15.5558 7.2738C16.2525 8.07364 16.6625 9.02243 16.6625 10.0042C16.6625 12.2869 15.0758 13.9687 11.7508 14.3182C12.6658 14.8032 13.3333 16.1659 13.3333 17.1926V19.5066C13.3333 19.5946 13.3142 19.6581 13.3042 19.7334C17.2008 18.3462 20 14.5882 20 10.1566C20 4.54761 15.5225 0 10 0Z"></path>
            </svg>
          </A>
          <A title="Twitter" href="https://twitter.com/ImmutableNotes">
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M20 3.92377C19.2639 4.25068 18.4731 4.47067 17.6432 4.5699C18.4908 4.06223 19.1408 3.25841 19.4469 2.29999C18.6547 2.76997 17.7762 3.1115 16.8409 3.2961C16.0925 2.49844 15.0263 2 13.8464 2C11.5803 2 9.74347 3.83762 9.74347 6.10292C9.74347 6.42445 9.78039 6.73828 9.84962 7.0375C6.43975 6.86674 3.41679 5.23295 1.39225 2.74997C1.03996 3.3561 0.83766 4.06069 0.83766 4.81374C0.83766 6.23676 1.56148 7.49287 2.66221 8.22822C1.98992 8.20669 1.35687 8.02208 0.803815 7.71517C0.803815 7.73286 0.803815 7.74901 0.803815 7.7667C0.803815 9.75509 2.21761 11.4135 4.09523 11.7896C3.75139 11.8835 3.38833 11.9335 3.01373 11.9335C2.74989 11.9335 2.49221 11.9073 2.24222 11.8604C2.76451 13.4903 4.27984 14.6772 6.07515 14.7103C4.67136 15.811 2.9022 16.4671 0.979193 16.4671C0.648437 16.4671 0.321526 16.4479 0 16.4094C1.81608 17.5733 3.97216 18.2525 6.28976 18.2525C13.8372 18.2525 17.9632 12.0004 17.9632 6.57829C17.9632 6.4006 17.9593 6.22368 17.9516 6.04754C18.7539 5.46833 19.45 4.74605 20 3.92377Z"></path>
            </svg>
          </A>
          <A title="Discord" href="https://discord.gg/bXQYtJxq3s">
            <svg
              className="fill-current"
              width="24"
              height="24"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M17.2286 4.63925C15.4971 3.24782 12.7593 3.01211 12.6436 3.00211C12.4607 2.98639 12.2871 3.08997 12.2121 3.25711C12.2093 3.26282 12.0564 3.70639 11.9086 4.13425C13.9207 4.48639 15.2879 5.26782 15.3607 5.31068C15.7021 5.50925 15.8164 5.94711 15.6171 6.28782C15.485 6.51496 15.2457 6.64211 15 6.64211C14.8779 6.64211 14.755 6.61139 14.6421 6.54568C14.6221 6.53354 12.6164 5.39211 10.0014 5.39211C7.38571 5.39211 5.37929 6.53425 5.35929 6.54568C5.01857 6.74354 4.58143 6.62711 4.38357 6.28568C4.18571 5.94568 4.30071 5.50925 4.64071 5.31068C4.71357 5.26782 6.08571 4.48354 8.10357 4.13211C7.94786 3.69925 7.79071 3.26282 7.78786 3.25711C7.71286 3.08925 7.53929 2.98354 7.35643 3.00211C7.24071 3.01139 4.50286 3.24711 2.74857 4.65782C1.83143 5.50497 0 10.4578 0 14.74C0 14.8157 0.0192857 14.8893 0.0571429 14.955C1.32214 17.1764 4.77071 17.7578 5.55643 17.7828C5.56143 17.7835 5.56571 17.7835 5.57 17.7835C5.70857 17.7835 5.83929 17.7171 5.92143 17.605L6.77143 16.4535C4.90714 16.0043 3.92143 15.2978 3.86214 15.2542C3.545 15.0207 3.47643 14.5735 3.71 14.2557C3.94286 13.9393 4.38857 13.8693 4.70571 14.1014C4.73214 14.1185 6.55143 15.3921 10 15.3921C13.4621 15.3921 15.2764 14.1135 15.2943 14.1007C15.6114 13.8707 16.0586 13.94 16.2907 14.2585C16.5221 14.5757 16.455 15.02 16.1393 15.2528C16.08 15.2964 15.0993 16.0014 13.2393 16.4507L14.0786 17.6042C14.1607 17.7171 14.2914 17.7828 14.43 17.7828C14.435 17.7828 14.4393 17.7828 14.4436 17.7821C15.23 17.7571 18.6786 17.1757 19.9429 14.9542C19.9807 14.8885 20 14.815 20 14.7393C20 10.4578 18.1686 5.50497 17.2286 4.63925ZM7.14286 13.2493C6.35357 13.2493 5.71429 12.45 5.71429 11.4635C5.71429 10.4771 6.35357 9.67782 7.14286 9.67782C7.93214 9.67782 8.57143 10.4771 8.57143 11.4635C8.57143 12.45 7.93214 13.2493 7.14286 13.2493ZM12.8571 13.2493C12.0679 13.2493 11.4286 12.45 11.4286 11.4635C11.4286 10.4771 12.0679 9.67782 12.8571 9.67782C13.6464 9.67782 14.2857 10.4771 14.2857 11.4635C14.2857 12.45 13.6464 13.2493 12.8571 13.2493Z"></path>
            </svg>
          </A>
        </div>
      </div>
    </div>
  );
};

export default Home;
