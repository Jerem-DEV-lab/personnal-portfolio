import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import ContactValidator from "App/Validators/ContactValidator";
import Messages from "App/Models/Messages";

export default class ContactsController {
  public async contactMessage({request, response, session}: HttpContextContract) {
    try {
      const payload = await request.validate(ContactValidator);
      await Messages.create(payload)
      session.flash('successContact', "Votre message à bien été envoyer")
      return response.redirect().toPath('/#contact')
    } catch (e) {
      session.flash('errorContact', "Vérifier les champs du formulaire !")
      return response.redirect().toPath('/#contact')
    }
  }
}

