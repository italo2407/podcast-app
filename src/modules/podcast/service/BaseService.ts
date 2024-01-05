export class BaseService {
  baseUrl = "https://itunes.apple.com";

  logError(error: any) {
    console.error(error);
  }
}
