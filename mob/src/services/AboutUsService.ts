import {ResponseModel} from '../models/ResponseModel';

interface IAboutUsService {
  getAboutUs(): Promise<ResponseModel | null>;
}

class AboutUsService implements IAboutUsService {
  async getAboutUs(): Promise<ResponseModel> {
    try {
      throw new Error('Method not implemented.');
      // TODO: Remove or implement this method
      // return Promise.resolve();
    } catch (error: any) {
      return Promise.reject(error);
    }
  }
}

export class MockAboutUsService implements IAboutUsService {
  async getAboutUs(): Promise<ResponseModel> {
    try {
      return Promise.resolve({
        code: 200,
        data: [
          {
            rowDescription: 'O nama',
            description:
              'Udruženje građana OBROK ZA PORODICU 3M je zvanično registrovano na adresi Miše Dimitrijevića 3b u Novom Sadu septembra 2021. godine sa osnivačem Mirjanom Mutuc.',
          },
          {
            description:
              'Obrok za porodicu je započeo je svoj humanitarni rad pre 5 godine potpuno samostano, majka sa dve ćerke iz sopstvenih sredstava od obroka koje su spremale za svoje porodice počele da odvajaju i snabdevaju porodice kojima je to bilo potrebno.',
          },
          {
            description:
              'Rad Obroka za porodicu 3M se proširio i na sledeća mesta i gradove: Kać, Kovilj, Šajkaš, Temerin, Žabalj, Budisava, Bač, Sombor, Zrenjanin, Vrbas,  Beograd, Niš, Kragujevac, Loznica, Kraljevo, Kruševac, Pirot, Valjevo, Leskovac. Mirjana je organizator i član svih grupa i na taj način koordiniše, kontroliše i pomaže u radu navedenih grupa koje snabdevaju od 50 do 100 porodica zavisno od mesta ili grada na mesečmom nivou.',
          },
          {
            rowDescription: 'Misija',
            description:
              'Misija udruđenja Obroka za porodicu 3M je sadržana u samom nazivu udruženja/grupe a to je pravo na obroka svakoj porodici.  U Mirjaninoj porodici je vreme obroka uvek bilo vreme kada se porodica okuplja, i ako je brojala više članova uvek su se sa ljubavlju i pažnjom pripremali obroci, a na takav način uvek se pripremi i više nego što je potrebno. Kako ne bi bacali pripremljene tople obroke dok neke porodice nisu trenutno u mogućnosti da sebi obezbede iste, Mirjana je počela da se raspituje kome je potreban obrok da sa njima podeli ono što je njena porodica imala za obrok. Kako je karakterisitično spremanje uvek, bar malo više hrane, ne samo za Mirjaninu porodicu, već za većinu porodica u Novom Sadu i Vojvodini, shvatila je da bi svaka porodica koja je pripremila više mogla da usreći drugu koja to nije u mogućnosti.',
          },
          {
            rowDescription: 'Ciljevi',
            description:
              'Angažovanje spoljnih saradnika i stručnjaka iz različitih oblasti kako bi izvršili besplatnu edukaciju članova porodica radi poboljšanja i unapređenja kvaliteta života: obuka rada na računaru, pisanje CV-a i podrška pri apliciranju za posao, održavanje stambenog prostora, informacije i edukacije o mogućnostima lečenja, vaspitanju i brige o detetu, starima i invalidima, obuke u zanatima i slično. Pomoć i podrška samohranim roditeljima',
          },
        ],
      });
    } catch (error: any) {
      return Promise.reject(error);
    }
  }
}

export default new AboutUsService();
