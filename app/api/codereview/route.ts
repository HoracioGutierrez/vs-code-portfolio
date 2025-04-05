import { google } from '@ai-sdk/google';
import { streamObject } from 'ai';
import { codeReviewSchema } from './schema';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const context = await req.json();
    console.log("🚀 ~ POST ~ context:", context)

    const correctCode = `
    const person = {
        name: "John",
        age: 30,
        city: "New York"    
    };
    
    function greet(person) {
        console.log("Hello, " + person.name + "!");
    }
    
    greet(person);`

    try {

        const result = streamObject({
            model: google('gemini-1.5-flash'),
            
            /* output : "object", */
            schema: codeReviewSchema,
            //mode : "json",
            onFinish : (result) => {
                console.log("🚀 ~ POST ~ result:", result) 
            },
            onError : (error) => {
                console.log("🚀 ~ POST ~ error:", error)
            },
            prompt:
                //`Generate 3 notifications for a messages app in this context:` + context,
            `Based on the code below :\n\n ${correctCode}\n\n review the code provided by the user and determine if it is correct or not. If it is not correct, provide a message explaining why it is not correct. If it is correct, provide a message explaining why it is correct. User code: ${context}. The answer should be in Rioplatense Spanish and with a fun tone to it, this is a personal portfolio so it should be relaxed and friendly but still letting the user know what didn't work.`
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
}