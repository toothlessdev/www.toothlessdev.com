import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
    api: { bodyParser: false },
};

const IMAGE_UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    if (process.env.NODE_ENV !== "development") return response.status(403).end();
    if (request.method !== "POST") return response.status(405).end();

    fs.mkdirSync(IMAGE_UPLOAD_DIR, { recursive: true });

    const form = formidable({
        uploadDir: IMAGE_UPLOAD_DIR,
        keepExtensions: true,
        filename: (_name, _ext, part) => `${part.originalFilename || part.name}-${Date.now()}`,
    });

    form.parse(request, (err, _fields, files) => {
        if (err) return response.status(500).json({ error: "File upload failed" });

        const file = Array.isArray(files.image) ? files.image[0] : files.image;

        if (!file) return response.status(400).json({ error: "No file uploaded" });

        const fileName =
            (file as formidable.File).newFilename ||
            path.basename((file as formidable.File).filepath);
        const fileUrl = `public/uploads/${fileName}`;

        return response.status(200).json({
            message: "File uploaded successfully",
            url: fileUrl,
        });
    });
}
