
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    avatar: string;
}

const TestimonialCard = ({ quote, name, title, avatar }: TestimonialCardProps) => {
    return (
        <Card className="h-full">
            <CardContent className="pt-6 flex flex-col h-full">
                <div className="mb-4">
                    <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/30">
                        <path d="M13.5 0C6.04412 0 0 6.04412 0 13.5C0 20.9559 6.04412 27 13.5 27H18V36H9C4.02944 36 0 31.9706 0 27V13.5C0 6.04412 6.04412 0 13.5 0ZM40.5 0C33.0441 0 27 6.04412 27 13.5C27 20.9559 33.0441 27 40.5 27H45V36H36C31.0294 36 27 31.9706 27 27V13.5C27 6.04412 33.0441 0 40.5 0Z" fill="currentColor" />
                    </svg>
                </div>

                <p className="text-muted-foreground flex-grow mb-6">{quote}</p>

                <div className="flex items-center gap-3">
                    <img
                        src={avatar}
                        alt={name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium text-sm">{name}</p>
                        <p className="text-muted-foreground text-xs">{title}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;