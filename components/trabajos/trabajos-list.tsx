import { getProjectsByFilter } from "@/features/sidebar-items/actions/getProjectsByFilter";

type TrabajosListProps = {
    stack?: string[] | null;
};

async function TrabajosList({ stack }: TrabajosListProps) {

    const { error, payload } = await getProjectsByFilter(stack ? stack : []);

    if (error) {
        return (
            <div>Error</div>
        )
    }

    return (
        <div>TrabajosList</div>
    )
}
export default TrabajosList