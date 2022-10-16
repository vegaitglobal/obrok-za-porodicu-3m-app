import Toast from 'react-native-toast-message';

import {DonationModel} from '../../models/DonationModel';
import DonateService from '../../services/DonateService';

export const donate = (donation: DonationModel) => () => {
  DonateService.donate(donation)
    .then(() => {
      Toast.show({
        type: 'success',
        props: {
          title: 'Zahtev za ugovaranje donacije uspešno poslat!',
          description: 'Pogledajte email sanduče.',
        },
      });
    })
    .catch((err: any) => {
      Toast.show({
        type: 'error',
        props: {
          title: 'Došlo je do greške!',
          description: 'Molimo pokušajte ponovo kasnije.',
        },
      });
      console.error(err);
    });
};
