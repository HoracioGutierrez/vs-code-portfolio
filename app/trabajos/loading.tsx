export default function Loading() {
    return (
        <div className="grid gap-4 w-1/2 grid-cols-1 md:grid-cols-2">
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
            <div className="border border-muted-foreground/50 rounded-md p-5 animate-pulse grow">
                <div className="h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
                <div className="mt-4 h-4 bg-muted-foreground/50 rounded"></div>
            </div>
        </div>
    );
}