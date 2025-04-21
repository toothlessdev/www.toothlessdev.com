import { NextApiRequest, NextApiResponse } from "next";
import { execFile } from "child_process";
import path from "path";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== "POST") return response.status(405).end();

    const PUBLISH_SCRIPT_PATH = path.join(process.cwd(), ".scripts", "commit-and-push.sh");

    execFile("sh", [PUBLISH_SCRIPT_PATH], (error, stdout, stderr) => {
        if (error) return response.status(500).json({ error });
        if (stderr) return response.status(500).json({ error: stderr });

        return response.status(201).json({
            message: "Post Published Successfully",
        });
    });
}
