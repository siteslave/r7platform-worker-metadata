import getConnection from "../db"

export class MetaModel {

  async savePerson(data: any) {
    const db = await getConnection()
    return db('person')
      .insert(data)
      .onConflict(['hospcode', 'hn'])
      .merge()
  }

  async saveService(data: any) {
    const db = await getConnection()
    return db('service')
      .insert(data)
      .onConflict(['hospcode', 'hn', 'seq', 'date_serv'])
      .merge()
  }

}