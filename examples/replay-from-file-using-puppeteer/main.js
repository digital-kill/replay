import { createRunner, parse } from '../../lib/main.js';
import fs from 'fs';

// Read recording for a file.
const recordingText = fs.readFileSync('./recording.json', 'utf-8');
// Validate the file using parse function.
const recording = parse(JSON.parse(recordingText));
// Create a runner and execute the script.
const runner = await createRunner(recording);
await runner.run();
