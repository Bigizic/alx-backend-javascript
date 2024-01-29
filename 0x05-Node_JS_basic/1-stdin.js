process.stdin.setEncoding('utf-8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', function() {
    const chunk = process.stdin.read();
    if (chunk) {
        process.stdout.write(`Your name is: ${chunk}`);
    }
});
process.stdin.on('end', function() {
    process.stdout.write('This important software is now closing\n');
})