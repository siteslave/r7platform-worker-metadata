import { MetaModel } from './models/metadata'
import { UtilsModel } from './models/utils';

const metaModel = new MetaModel()
const utilsModel = new UtilsModel();

export default async (job: any) => {
  switch (job.name) {
    case 'PERSON': {
      const data = job.data.metadata
      metaModel.savePerson(data)
      break
    }
    case 'OPD': {
      const _data = job.data.metadata
      const tmpData: any[] = utilsModel.opdGroupBy(_data);

      let data: any[] = [];
      for await (const item of tmpData) {
        const obj: any = {};
        obj.hospcode = item.hospcode;
        obj.hn = item.hn;
        obj.seq = item.seq;
        obj.date_serv = item.date_serv;
        obj.time_serv = item.time_serv;
        obj.chiefcomp = item.chiefcomp;
        obj.diag_text = item.diag_text;
        obj.d_update = item.d_update;
        obj.ingress_zone = item.ingress_zone;
        obj.created_at = item.created_at;
        obj.updated_at = item.updated_at;
        data.push(obj);
      }
      metaModel.saveOpd(data)
      break
    }
    case 'IPD': {
      const data = job.data.metadata
      metaModel.saveIpd(data)
      break
    }

  }
}