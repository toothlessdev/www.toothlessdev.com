import { ImageModel } from "@/entities/image/model/ImageModel";
import { injectable } from "tsyringe";

@injectable()
export class ImageService {
    public async uploadImage(image: File) {
        const formData = new FormData();
        formData.append("image", image);

        const response = await fetch("/api/image", {
            method: "POST",
            body: formData,
        });

        const json = (await response.json()) as ImageModel;
        return json.url;
    }
}