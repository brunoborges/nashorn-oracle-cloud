import javax.script.*;
import java.util.Arrays;

public class Execute {

  public static void main(String args[]) throws Exception {
    String script = args[0];
    ScriptEngineManager manager = new ScriptEngineManager();
    ScriptEngine engine = manager.getEngineByName("nashorn");
    String[] arguments = new String[args.length - 1];
    System.arraycopy(args, 1, arguments, 0, arguments.length);
    engine.put("arguments", arguments);
    engine.put("$ARG", arguments);
    engine.eval("load('" + script + "')");    
  }

}

