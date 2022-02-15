import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Projects from "App/Models/Projects";

export default class HomeController {
  public async index({view}: HttpContextContract) {
    const projects = await Projects.query()
    return view.render('index', {projects})
  }
  public async viewCv({view}: HttpContextContract) {
    return view.render('pages/cv')
  }

}
