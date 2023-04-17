import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/ui/buttons/Button';

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button className='mb-5' success rounded outline>
          <GoBell />
          Click me!
        </Button>
      </div>

      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>

      <div>
        <Button warning outline>
          <GoDatabase />
          See Deal!
        </Button>
      </div>

      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>

      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
