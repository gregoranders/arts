/**
 * The IIdentifier interface is used when registering components.
 *
 * When registering a service, directive or a controller this a static property called NAME is used internally.
 *
 * Due to the fact the this needs to be static is is marked as optional and has the nature of a hint.
 *
 * @author Gregor Anders
 * @since 0.0.1
 * @version 0.0.1
 */
interface IIdentifier
{
  NAME?: string;
}

export = IIdentifier;