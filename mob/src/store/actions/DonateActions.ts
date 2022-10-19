import {DonationModel} from '../../models/DonationModel';
import DonateService from '../../services/DonateService';
import Toast from 'react-native-toast-message';
import i18n from '../../translations/i18n';

export const donate = (donation: DonationModel) => () => {
  DonateService.donate(donation)
    .then(() => {
      Toast.show({
        type: 'success',
        props: {
          title: i18n.t('donateScreen.success'),
          description: i18n.t('donateScreen.successDescription'),
        },
      });
    })
    .catch((err: any) => {
      Toast.show({
        type: 'error',
        props: {
          title: i18n.t('general.error'),
          description: i18n.t('general.errorText'),
        },
      });
      console.error(err);
    });
};
