import getConnection from "../db"

export class MetaModel {

  async savePerson(data: any): Promise<any> {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('person')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'ingress_zone'])
        .merge(['cid', 'fname', 'lname', 'birth', 'sex', 'd_update', 'updated_at'])
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveOpd(data: any): Promise<any> {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('opd')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'seq', 'date_serv', 'ingress_zone'])
        .merge(['time_serv', 'diag_text', 'updated_at'])
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

  async saveIpd(data: any): Promise<any> {
    const db = await getConnection();
    return new Promise((resolve: any, reject: any) => {
      db('ipd')
        .insert(data)
        .onConflict(['hospcode', 'hn', 'an', 'ingress_zone'])
        .merge(['dischs', 'discht', 'dateadm', 'timeadm', 'datedsc', 'timedsc', 'updated_at'])
        .then(() => resolve())
        .catch((error: any) => reject(error))
        .finally(async () => {
          await db.destroy();
        });
    });
  }

}